"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";

interface ModelProps{
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Model: React.FC<ModelProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children
}) =>{
    const onchange = (open : boolean)=>{
        if(!open){
            onClose();
        }
    }

    return(
        <Dialog open={isOpen} onOpenChange={onchange}> 
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}