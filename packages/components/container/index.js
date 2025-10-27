import { componentInstall } from '@ui-library/utils'
import Container from './src/container.vue'
import Header from './src/header.vue'
import Footer from './src/footer.vue'
import Aside from './src/aside.vue'
import Main from './src/main.vue'

export const AContainer = componentInstall(Container)
export const AHeader = componentInstall(Header)
export const AFooter = componentInstall(Footer)
export const AAside = componentInstall(Aside)
export const AMain = componentInstall(Main)

export default { AContainer, AHeader, AFooter, AAside, AMain }
