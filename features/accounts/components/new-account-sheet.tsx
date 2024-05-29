import { useNewAccount } from "@/features/hooks/use-new-account"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { use } from "react"


export const NewAccountSheet = () => {
    const { isOpen, onClose } = useNewAccount()
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
            </SheetContent>
        </Sheet>
    )
}