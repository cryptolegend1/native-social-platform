import { LAYOUT } from "../constants"
import { createAppContainer } from "react-navigation"
import { createDrawerNavigator } from "react-navigation-drawer"
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Logged/Home'
import Chat from '../screens/Logged/Chat'
import Blog from '../screens/Logged/Blog'
import Perfil from '../screens/Logged/Perfil'
import Logout from '../screens/Logged/Perfil/Logout'
import Alarms from '../screens/Logged/Alarms'
import Normas from '../screens/Logged/Perfil/Normas'
import Service from "../screens/Logged/Service"
import Valorar from '../screens/Logged/Perfil/valorar'
import Account from '../screens/Logged/Perfil/Account'
import Payment from '../screens/Logged/Descubre/Payment'
import Confirms from "../screens/Logged/confirms"
import Deposito from '../screens/Logged/Descubre/Deposito'
import SideMenu from './SideMenu'
import ChatRoom from '../screens/Logged/Chat/room'
import Addalarm from '../screens/Logged/Descubre/Addalarm'
import Descubre from '../screens/Logged/Descubre'
import Contrato from "../screens/Logged/Perfil/Contrato"
import SaludList from '../screens/Logged/Descubre/Salud'
import BlogPage1 from '../screens/Logged/Blog/blog1'
import BlogPage2 from '../screens/Logged/Blog/blog2'
import AlarmsAdd from '../screens/Logged/Alarms/Addalarm'
import BlogPage3 from '../screens/Logged/Blog/blog3'
import Membership from "../screens/Logged/Service/membership"
import ChangePass from '../screens/Logged/Perfil/ChangePass'
import Crecimiento from '../screens/Logged/Descubre/Crecimiento'
import Description from "../screens/Logged/Descubre/Description"
import SaludDetail from '../screens/Logged/Descubre/SaludDetail'
import DescubreList from '../screens/Logged/Descubre/list'
import Verification from "../screens/Logged/Descubre/Verification"
import ConfirmDetail from "../screens/Logged/confirms/detail"
import HomeCardDetail from '../screens/Logged/Home/detail'
import DescubreDetail from '../screens/Logged/Descubre/detail'
import DescubreLanding from '../screens/Logged/Descubre/Landing'
import PaymentSetting from '../screens/Logged/Descubre/PaymentSetting'
import CrecimientoDetail from '../screens/Logged/Descubre/CrecimientoDetail'

/**
 * Home Navigator
 */
const Navigator = createStackNavigator(
	{
		HomeScreen: {
			screen: Home,
			navigationOptions: { headerShown: false },
		},
		HomeCardDetailScreen: {
			screen: HomeCardDetail,
			navigationOptions: { headerShown: false },
		},
		DescubreScreen: {
			screen: Descubre,
			navigationOptions: { headerShown: false },
		},
		DescubreListScreen: {
			screen: DescubreList,
			navigationOptions: { headerShown: false },
		},
		DescubreDetailScreen: {
			screen: DescubreDetail,
			navigationOptions: { headerShown: false },
		},
		PerfilScreen: {
			screen: Perfil,
			navigationOptions: { headerShown: false },
		},
		NormasScreen: {
			screen: Normas,
			navigationOptions: { headerShown: false },
		},
		LogoutScreen: {
			screen: Logout,
			navigationOptions: { headerShown: false },
		},
		ChatScreen: {
			screen: Chat,
			navigationOptions: { headerShown: false },
		},
		ChatRoomScreen: {
			screen: ChatRoom,
			navigationOptions: { headerShown: false },
		},
		BlogScreen: {
			screen: Blog,
			navigationOptions: { headerShown: false },
		},
		BlogPage1Screen: {
			screen: BlogPage1,
			navigationOptions: { headerShown: false },
		},
		BlogPage2Screen: {
			screen: BlogPage2,
			navigationOptions: { headerShown: false },
		},
		BlogPage3Screen: {
			screen: BlogPage3,
			navigationOptions: { headerShown: false },
		},
		SaludListScreen: {
			screen: SaludList,
			navigationOptions: { headerShown: false },
		},
		CrecimientoScreen: {
			screen: Crecimiento,
			navigationOptions: { headerShown: false },
		},
		SaludDetailScreen: {
			screen: SaludDetail,
			navigationOptions: { headerShown: false },
		},
		DescubreLandingScreen: {
			screen: DescubreLanding,
			navigationOptions: { headerShown: false },
		},
		CrecimientoDetailScreen: {
			screen: CrecimientoDetail,
			navigationOptions: { headerShown: false },
		},
		DepositoScreen: {
			screen: Deposito,
			navigationOptions: { headerShown: false },
		},
		PaymentScreen: {
			screen: Payment,
			navigationOptions: { headerShown: false },
		},
		PaymentSettingScreen: {
			screen: PaymentSetting,
			navigationOptions: { headerShown: false },
		},
		AddalarmScreen: {
			screen: Addalarm,
			navigationOptions: { headerShown: false },
		},
		AccountScreen: {
			screen: Account,
			navigationOptions: { headerShown: false },
		},
		ChangePassScreen: {
			screen: ChangePass,
			navigationOptions: { headerShown: false },
		},
		AlarmsScreen: {
			screen: Alarms,
			navigationOptions: { headerShown: false },
		},
		AlarmsAddScreen: {
			screen: AlarmsAdd,
			navigationOptions: { headerShown: false },
		},
		ValorarScreen: {
			screen: Valorar,
			navigationOptions: { headerShown: false },
		},
		ConfirmsScreen: {
			screen: Confirms,
			navigationOptions: { headerShown: false },
		},
		ConfirmDetailScreen: {
			screen: ConfirmDetail,
			navigationOptions: { headerShown: false },
		},
		ServiceScreen: {
			screen: Service,
			navigationOptions: { headerShown: false },
		},
		MembershipScreen: {
			screen: Membership,
			navigationOptions: { headerShown: false },
		},
		VerificationScreen: {
			screen: Verification,
			navigationOptions: { headerShown: false },
		},
		ContratoScreen: {
			screen: Contrato,
			navigationOptions: { headerShown: false },
		},
		DescriptionScreen: {
			screen: Description,
			navigationOptions: { headerShown: false },
		},
	},
	{
		initialRouteName: 'HomeScreen'
	}
)

const RootStack = createDrawerNavigator({
	Home: {
		screen: Navigator,
	},
}, {
	contentComponent: SideMenu,
	drawerWidth: LAYOUT.window.width,
	drawerOpenRoute: 'DrawerOpen',
	drawerCloseRoute: 'DrawerClose',
	drawerToggleRoute: 'DrawerToggle',
	drawerBackgroundColor: '#00000000'
}
)

export default createAppContainer(RootStack)