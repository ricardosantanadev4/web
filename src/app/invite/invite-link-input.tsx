'use client'

import { Copy, Link } from "lucide-react";
import { IconButton } from "../components/icon-button";
import { InputField, InputICon, InputRoot } from "../components/input";

interface InviteLinkCopyInputProps {
    invitLink: string;
}

export function InviteLinkInput({ invitLink }: InviteLinkCopyInputProps) {

    function copyInviteLink() {
        navigator.clipboard.writeText(invitLink)
    }

    return (
        <InputRoot>
            <InputICon>
                <Link
                    className="size-5"
                />
            </InputICon>

            <InputField
                readOnly
                defaultValue={invitLink}
            />

            <IconButton
                className="-mr-2"
                onClick={copyInviteLink}
            >
                <Copy
                    className="size-5"
                />
            </IconButton>
        </InputRoot>
    )
}
