import Image from "next/image";

export default function Logo() {
    return <Image src='/images/others/logo.svg' layout='fixed' width={139} height={20} alt='Logo EasyBank' />
}