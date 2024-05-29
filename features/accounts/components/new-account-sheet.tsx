import { z } from "zod"
import { useNewAccount } from "@/features/hooks/use-new-account"
import { AccountForm } from "@/features/accounts/components/account-form"
import { insertAccountSchema } from "@/db/schema"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

const formSchema = insertAccountSchema.pick({
    name: true
})

type FormValues = z.input<typeof formSchema>


export const NewAccountSheet = () => {
    const { isOpen, onClose } = useNewAccount()

    const onSubmit = (values: FormValues) => {
        console.log({ values })
        console.log('EIEI')
    }
    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>
                        New Account
                    </SheetTitle>
                    <SheetDescription>
                        Create a new account to track your transactions
                    </SheetDescription>
                </SheetHeader>
                <AccountForm
                    onSubmit={onSubmit}
                    onDelete={() => { }}
                    disabled={false}
                    defaultValues={{
                        name: ""
                    }}
                />
            </SheetContent>
        </Sheet>
    )
}