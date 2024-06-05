import { DiGithub } from "react-icons/di"
import { LiaLinkedin } from "react-icons/lia"
import { BsWhatsapp } from "react-icons/bs"
import { GoMail } from "react-icons/go"

export default function Footer(): React.ReactNode {
    return (
        <footer className="bg-[#242424] text-[#eee] py-5">
        <div className="mx-auto text-center">
          <p className=" text-lg">Developed by</p>
          <p className="font-semibold text-2xl">Henrique Magalhães</p>
        </div>
        <div className="flex w-[200px] justify-between items-center mx-auto">
          <a href="https://github.com/autotelico">
              <DiGithub size={50} className="hover:scale-110 duration-500" />
          </a>
          <a href="https://www.linkedin.com/in/henrique-mag/">
              <LiaLinkedin size={50} className="hover:scale-110 duration-500" />
          </a>
          <a href="mailto:henriqueheronhh@gmail.com">
              <GoMail size={40} className="hover:scale-110 duration-500"/>
          </a>
        </div>
      </footer>
    )
}