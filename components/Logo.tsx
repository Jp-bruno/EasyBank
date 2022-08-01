import Image from "next/image";

type Logo = {
    dark?: Boolean
}

export default function Logo({dark}:Logo) {
    return <Image src={`/images/others/${dark ? 'logoDark' : 'logoWhite'}.svg`} layout='fixed' width={139} height={20} alt='Logo EasyBank' />
}