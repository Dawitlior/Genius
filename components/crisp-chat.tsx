"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("ef9c7b6b-7b8c-4b74-a383-86f506f574ec");
    }, []);

    return null;
};