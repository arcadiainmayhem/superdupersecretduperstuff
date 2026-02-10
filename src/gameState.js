import Alpine from 'alpinejs'
import { ScreenNode } from 'three/webgpu'


//screen definitions - game content

const screens = {
    'entrance' : {
        id: 'entrance',
        image: '/images/entrance/bunker.png',
        text: 'A dim corridor stretches ahead.....The air is thick with dust',
        actions: [
            {
                label: " -> Step Forward", goto:'hallway'
            },
                        {
                label: " -> Touch the wall", goto:'wall-discovery'
            },
        ]
    }
}





//register alpine store
Alpine.store('game', {
    //state
    currentScreen: null,
    inventory : [],
    visited : [],


    //initialise
    init() {
        //run fresh start
        this.currentScreen = 'entrance'
    },
    
    getScreen() {
            return screens[this.currentScreen]
    },
    
    //handle action button clicks
    handleAction(action) {
        if (action.goto) {
            this.goTo(action.goto)
        }
        if (action.action) {
            //custom action handler
            this[action.action]?.(action)
        }
    },

    //navigating a screen
    goTo(screenId) {
        if (!screens[screenId]) {
            console.warn('Screen "${screenID}" not found')
            return
        }
        this.currentScreen = screenId
        this.enterScreen(screenId)
        
    },
    
    //called when entering a scene
    enterScreen(screenId) {
        const screen = screens[screenId]
        //track visited screens
        if (!this.visited.includes(screenId)) {
            this.visited.push(screenId)
        }

        //run screen's on enter
        if (screen?.onEnter) {
            screen.onEnter(this)
        }
        }


    })

    export default Alpine