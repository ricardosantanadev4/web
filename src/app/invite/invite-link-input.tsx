import { Copy, Link } from "lucide-react";
import { IconButton } from "../components/icon-button";
import { InputField, InputICon, InputRoot } from "../components/input";

export function InviteLinkInput() {
    return (
        <InputRoot>
            <InputICon>
                <Link
                    className="size-5"
                />
            </InputICon>

            <InputField
                readOnly
                defaultValue="http://localhost:3000/invite/..."
            />

            <IconButton className="-mr-2">
                <Copy
                    className="size-5"
                />
            </IconButton>
        </InputRoot>
    )
}