import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/">
            <Image src="/logo.svg" width={54} height={54} priority alt="" />
        </Link>
    ); //강의 38:34 로고 사진 안 들어가서 넣어야됨
};

export default Logo;
