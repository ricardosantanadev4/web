import { ArrowRight, Mail, User } from 'lucide-react';
import { Button } from '../components/button';
import { InputField, InputICon, InputRoot } from '../components/input';

export function SubscriptionForm() {
    return (
        <form
            className='bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y6 w-full md:max-w-[440px]'
        >
            <h2
                className='font-heading font-semibold text-gray-200 text-xl'
            >
                Inscrição
            </h2>

            <div
                className='space-y-3'
            >
                <InputRoot>
                    <InputICon>
                        <User />
                    </InputICon>

                    <InputField
                        type='text'
                        placeholder='Nome completo'
                    >
                    </InputField>
                </InputRoot>

                <InputRoot>
                    <InputICon>
                        <Mail />
                    </InputICon>

                    <InputField
                        type='email'
                        placeholder='E-mail'
                    >
                    </InputField>
                </InputRoot>

                <Button
                    type='submit'
                >
                    Confirmar
                    <ArrowRight />
                </Button>
            </div>
        </form>
    )
}