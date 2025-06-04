import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'

export default function TopBar() {
  return (
    <nav className="flex w-full bg-white text-[#626262]">
      <div className="flex w-full justify-around py-2">
        <div className="flex items-center p-1">
          <a
            href="https://twitter.com/unileao"
            target="_blank"
            className="px-4"
          >
            <FaXTwitter size={12} />
          </a>
          <a
            href="https://www.facebook.com/unileaooficial/"
            target="_blank"
            className="px-4"
          >
            <FaFacebookF size={12} />
          </a>
          <a
            href="https://www.instagram.com/unileao/"
            target="_blank"
            className="px-4"
          >
            <FaInstagram size={12} />
          </a>
          <a
            href="https://www.youtube.com/user/tvleaosampaio"
            target="_blank"
            className="px-4"
          >
            <FaYoutube size={16} />
          </a>
          <div className="mx-4 h-full w-px bg-[#626262]" />
          <a
            href="tel:8821011000"
            target="_blank"
            className="px-4 text-xs text-nowrap"
          >
            (88) 2101 1000
          </a>
        </div>

        <div className="flex gap-4 p-1 text-xs text-nowrap max-[900px]:hidden">
          <a href="https://portal.unileao.edu.br" target='_blank'>Portal Educacional</a>
          <a href="https://matriculas.unileao.edu.br" target='_blank'>
            Portal de Matrícula e Rematrícula
          </a>
          <a href="https://digital.unileao.edu.br" target='_blank'>Unileão Digital</a>
          <a href="https://dliportal.zbra.com.br/Login.aspx?key=leaosampaio" target='_blank'>
            Biblioteca Virtual
          </a>
        </div>
      </div>
    </nav>
  )
}
