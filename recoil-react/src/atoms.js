import {atom,selector} from 'recoil';


export  const networkAtom=atom({
    key:"NetworkAtom",
    default:102
})
export  const messageAtom=atom({
    key:"MessageAtom",
    default:0
})
export  const notificationsAtom=atom({
    key:"NotificationsAtom",
    default:12
})
export  const jobsAtom=atom({
    key:"JobsAtom",
    default:0
})


//Selector is derived from atoms
export const totalNotificationSelector=selector({
    key:"totalNotificationSelector",
    get:({get})=>{
        const networkAtomCount=get(networkAtom);
        const messageAtomCount=get(messageAtom);
        const notificationsAtomCount=get(notificationsAtom);
        const jobsAtomCount=get(jobsAtom);
        return networkAtomCount+messageAtomCount+notificationsAtomCount+jobsAtomCount;
    }
})


//Asynchronous Data Queries 
export const notifications = atom({
    key:"networkAtom",
    default:selector({
        key:"defaultvalue",
        get:async ()=>{
            const res=await axios.get("")
        }
    })
})