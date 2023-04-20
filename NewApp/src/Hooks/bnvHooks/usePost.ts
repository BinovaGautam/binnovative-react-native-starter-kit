import {
    MutationFunction,
    UseMutationOptions,
    useMutation,
} from '@tanstack/react-query';
import { useMemo } from 'react';
import { handleSuccess } from './Config';

interface optionType extends Omit<UseMutationOptions, 'MutationFunction'> { }

export default function usePost(
    mutationFunction: MutationFunction,
    options?: optionType,
) {
    const {
        data: response,
        error,
        isLoading,
        mutate,
        mutateAsync,
    } = useMutation(mutationFunction, options);

    const data = useMemo(() => {
        console.log('RESPONSE CHANGED ', response);
        const res = handleSuccess(response?.data ? response?.data : response);
        console.log('RESPONSE CHANGED AFTER HANDLE SUCCESS USEPOST ', res)
        if (res?.success && res?.data) {
            console.log('YES THE RESPONSE IS SUCCESS', res)
            return res?.data
        }
        return res;
    }, [response]);

    return { mutateAsync, mutate, isLoading, error, data };
}
