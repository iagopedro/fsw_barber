"use client";

import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, UserIcon } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const SideMenu = () => {
    const { data } = useSession();

    const handleLogInClick = () => signIn("google");
    const handleLogOutClick = () => signOut();
    
    return (
        <>
            <SheetHeader className="text-left border-b *border-solid border-secondary px-5 py-6">
                <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            {data?.user ? (
                <div className="flex justify-between px-5 py-6 items-center">
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage
                                src={data.user?.image ?? ""}
                                alt="User"
                            />
                        </Avatar>

                        <h2 className="font-bold">{data.user.name}</h2>
                    </div>

                    <Button onClick={handleLogOutClick} variant="secondary" size="icon">
                        <LogOutIcon />
                    </Button>
                </div>
            ) : (
                <div className="flex flex-col px-5 py-6 gap-3">
                    <div className="flex items-center gap-2">
                        <UserIcon size={32} />
                        <h2 className="font-bold">Olá. Faça seu login!</h2>
                    </div>
                    <Button onClick={handleLogInClick} variant="secondary" className="w-full justify-start">
                        <LogInIcon className="mr-2" size={18} />
                        Fazer login
                    </Button>
                </div>
            )}

            <div className="flex flex-col gap-3 px-5">
                <Button variant="outline" className="justify-start" asChild>
                    <Link href="/">
                        <HomeIcon size={18} className="mr-2" />
                        Início
                    </Link>
                </Button>

                {data?.user && (
                    <Button variant="outline" className="justify-start" asChild>
                        <Link href="/bookings">
                            <CalendarIcon size={18} className="mr-2" />
                            Agendamentos
                        </Link>
                    </Button>
                )}
            </div>
        </>
    );
}

export default SideMenu;