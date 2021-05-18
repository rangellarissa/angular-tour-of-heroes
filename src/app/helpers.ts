import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MonoTypeOperatorFunction, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const NG_COMPONENT_DEF = 'ɵcmp';

type Hook = 'ngOnDestroy' | 'ngOnInit' | 'ngOnChanges';
type HooksCallback = OnDestroy & OnInit & OnChanges;


export function overlapHook<T extends Hook>(target: Record<string, any>, hook: T, overlapCallback: HooksCallback[T]) {
    const ecmp = Object.getOwnPropertyDescriptor(target.constructor, NG_COMPONENT_DEF);

    if (ecmp && !ecmp.get) {
        const ecmpHook = `o${hook.slice(3)}`;
        const ecmpDefaultHook = ecmp.value[ecmpHook];
        ecmp.value[ecmpHook] = function (changes: SimpleChanges) {
            overlapCallback(changes);
            return ecmpDefaultHook?.(changes);
        };
        return;
    }

    const defaultHook = target[hook];
    target[hook] = function (changes: SimpleChanges) {
        overlapCallback?.(changes);
        return defaultHook?.(changes);
    };
}

export function subscribeUntil<T>(target: Record<string, any>): MonoTypeOperatorFunction<T> {
    const propertyName = 'ppUnsubscriber$';

    if (!target[propertyName]) {
        target[propertyName] = new Subject();
        overlapHook(target, 'ngOnDestroy', () => {
            target[propertyName].next();
            target[propertyName].complete();
        });
    }

    return takeUntil(target[propertyName]);
}
