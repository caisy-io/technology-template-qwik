import type { Signal } from "@builder.io/qwik";
import { component$, createContextId, Slot, useContextProvider, useSignal } from "@builder.io/qwik";

export const CMSDataContext = createContextId<Signal<string>>(
    'cms-data-context'
  );
   
export const CMSDataContextProvider = component$((props) => {
    const navigantionState = useSignal(props);
    useContextProvider(CMSDataContext, navigantionState);
    
    return (
        <>
          <Slot />
        </>
    );
  });