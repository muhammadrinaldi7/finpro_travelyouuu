import { Inter, Lora, Source_Sans_3 } from 'next/font/google'

 
// define your variable fonts
const inter = Inter(
    {
        subsets: ['latin'],
        variable: '--font-inter',
    }
)
const lora = Lora(
    {
        subsets: ['latin'],
        variable: '--font-lora',
}
)
// define 2 weights of a non-variable font
const sourceCodePro400 = Source_Sans_3({ 
    subsets: ['latin'],
    style: 'normal',
    weight: '400' })
const sourceCodePro700 = Source_Sans_3({ 
    subsets: ['latin'],
    style: 'normal',
    weight: '700' })
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
 
export { inter, lora, sourceCodePro400, sourceCodePro700 }