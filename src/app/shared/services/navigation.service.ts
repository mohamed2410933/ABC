import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IMenuItem {
    id?: string;
    title?: string;
    description?: string;
    type: string;       // Possible values: link/dropDown/extLink
    name?: string;      // Used as display text for item and title for separator type
    state?: string;     // Router state
    icon?: string;      // Material icon name
    tooltip?: string;   // Tooltip text
    disabled?: boolean; // If true, item will not be appeared in sidenav.
    sub?: IChildItem[]; // Dropdown items
    badges?: IBadge[];
    active?: boolean;
    role?:number;
    permissions?:any[]
}
export interface IChildItem {
    id?: string;
    parentId?: string;
    type?: string;
    name: string;       // Display text
    state?: string;     // Router state
    icon?: string;
    sub?: IChildItem[];
    active?: boolean;
    role?:number;
    permissions?:any[]

}

interface IBadge {
    color: string;      // primary/accent/warn/hex color codes(#fff000)
    value: string;      // Display text
}

interface ISidebarState {
    sidenavOpen?: boolean;
    childnavOpen?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    public sidebarState: ISidebarState = {
        sidenavOpen: true,
        childnavOpen: false
    };
    selectedItem: IMenuItem;
    
    constructor() {
    }

    defaultMenu: IMenuItem[] = [
        {   
            name: 'الرئيسية',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Bar-Chart',
            state: '/dashboard',
            role:1,
            permissions:[1,2,3,4,5,6]
        },
        {
            name: 'إدارة المحتوي',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'i-Management',
            role:1,
            permissions:[1,5],
            sub: [
                { icon: 'i-Information', name: 'عن الشركة', 
                state: '/contentManagement/accordions', type: 'link',permissions:[1], },
                { icon: 'i-Medal-2', name: 'خداماتنا', 
                state: '/contentManagement/our-services', type: 'link',permissions:[1], },
                { icon: 'i-Financial', name: 'مميزاتنا', 
                state: '/contentManagement/our-advantages', type: 'link',permissions:[1], },
                { icon: 'i-Gift-Box', 
                name: 'العروض', 
                state: '/contentManagement/offers',
                 type: 'link' ,
                 permissions:[1,5],
                },
                { icon: 'i-Telephone', name: 'جهات الاتصال', state: '/contentManagement/contacts', type: 'link',permissions:[1],  },
                { icon: 'i-ID-Card', name: 'الشروط والاحكام', state: '/contentManagement/terms-conditions', type: 'link',permissions:[1],  },
                { icon: 'i-ID-Card', name: 'سياسة الموقع', state: '/contentManagement/site-policy', type: 'link',permissions:[1],  },
                { icon: 'i-ID-Card', name: 'إخلاء المسؤلية', state: '/contentManagement/evacuation-responsibilaty', type: 'link',permissions:[1],  },
            ]
        },
        {
            name: 'إعدادات الاسهم',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'dropDown',
            icon: 'i-Statistic',
            role:1,
            permissions:[1,2],
            sub: [
                { icon: 'i-Posterous', name: 'القطاعات', state: '/stockSettings/sectors', type: 'link',permissions:[1,2], },
                { icon: 'i-Line-Chart', name: 'الاسهم', state: '/stockSettings/stocks', type: 'link',permissions:[1,2], },
            ]
        },
        {
            name: ' إدارة التوصيات',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'dropDown',
            icon: 'i-Gear-2',
            role:1,
            permissions:[1,2,4,5],
            sub: [
                { icon: 'i-Align-Justify-All', name: 'كل التوصيات', 
                state: '/recommendationsManagement/all-recomondations',
                 type: 'link',
                 permissions:[1,2,4,5],
                },
                { icon: 'i-File-Horizontal-Text',
                 name: 'انواع التوصيات', 
                 state: '/recommendationsManagement/recommendationtypes', 
                 type: 'link',
                 permissions:[1,2,5],
                },
                { 
                    icon: 'i-File-Clipboard-File--Text',
                     name: 'المؤشرات', 
                     state: '/recommendationsManagement/reports', 
                     type: 'link' ,
                     permissions:[1,2,4]
                  },
            ]
        },
        {
            name: ' إدارة العملاء ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'dropDown',
            icon: 'i-Gears',
            role:1,
            permissions:[1,3,4,5,6],
            sub: [
                { 
                    icon: 'i-Business-ManWoman',
                    name: 'العملاء',
                    state: '/customersManagement/customers',
                    type: 'link',
                    permissions:[1,3,4,5,6]
                },
                { 
                    icon: 'i-Big-Data',
                    name: 'الباقات', 
                    state: '/customersManagement/packages',
                    type: 'link' ,
                    permissions:[1,4,5]
                },
                { 
                    icon: 'i-Billing', 
                    name: 'الفواتير ', 
                    state: '/customersManagement/bills', 
                    type: 'link' ,
                    permissions:[1,5]
                },
            ]
        },
        {
            name: 'فريق العمل',
            description: '600+ premium icons',
            type: 'dropDown',
            icon: 'i-Business-Mens',
            // state: '/teamWork',
            role:1,
            permissions:[1,6,5],
            sub:[
                { icon: 'i-Big-Data',
                 name: 'الاعضاء', 
                 state: '/teamWork/team-work', 
                 type: 'link',
                 permissions:[1],
                 },
                { icon: 'i-Big-Data', 
                name: 'متابعة المسوقين', 
                state: '/teamWork/follow-markter', 
                type: 'link' ,
                permissions:[1,6],
            },
                { icon: 'i-Big-Data', 
                name: 'المسوقين', 
                state: '/teamWork/markters', 
                type: 'link' ,
                permissions:[6],
            },
                { icon: 'i-Big-Data', 
                name: 'الوكلاء', 
                state: '/teamWork/myAgents', 
                type: 'link' ,
                permissions:[5],
            },
          
            ]

        },
        {
            name: 'السوق',
            description: '600+ premium icons',
            type: 'link',
            icon: 'i-Cart-Quantity',
            state: '/market',
            role:1,
            permissions:[1],
        },
        // {
        //     name: 'المؤشر',
        //     description: '600+ premium icons',
        //     type: 'link',
        //     icon: 'i-Pointer',
        //     state: '/pointer',
        //     role:1,
        //     permissions:[1,2],
        // },
        {
            name: 'صور صفحة الموقع',
            description: '600+ premium icons',
            type: 'link',
            icon: 'i-Monitor-5',
            state: '/sliders',
            role:1,
            permissions:[1],
        },
        {
            name: 'المنافسة',
            description: '600+ premium icons',
            type: 'link',
            icon: 'i-Coins',
            state: '/comption',
            role:1,
            permissions:[1 , 2 , 5],
        },
        {
            name: 'توزيع الوكلاء',
            description: '600+ premium icons',
            type: 'link',
            icon: 'i-Conference',
            state: '/agents',
            role:1,
            permissions:[1,5],
        },
        {
            name: 'تقييمات العملاء',
            description: '600+ premium icons',
            type: 'link',
            icon: 'i-Medal-2',
            state: '/evaluations',
            role:1,
            permissions:[1 , 5],
        },
        {
            name: 'أراء العملاء ',
            description: '600+ premium icons',
            type: 'link',
            icon: 'i-Inbox-Into',
            state: '/customers-reviews/',
            role:1,
            permissions:[1,3,4,5,6],
        },
        {
            name: ' الرسائل الواردة',
            description: '600+ premium icons',
            type: 'link',
            icon: 'i-Speach-Bubbles',
            state: '/messages/',
            role:1,
            permissions:[1],
        },
        {
            name: 'الاخبار',
            description: '600+ premium icons',
            type: 'link',
            icon: 'i-Newspaper',
            state: '/news',
            role:1,
            permissions:[1,2,3,4,5,6],
        },
    ];


    // sets iconMenu as default;
    menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
    // navigation component has subscribed to this Observable
    menuItems$ = this.menuItems.asObservable();

    // You can customize this method to supply different menu for
    // different user type.
    // publishNavigationChange(menuType: string) {
    //   switch (userType) {
    //     case 'admin':
    //       this.menuItems.next(this.adminMenu);
    //       break;
    //     case 'user':
    //       this.menuItems.next(this.userMenu);
    //       break;
    //     default:
    //       this.menuItems.next(this.defaultMenu);
    //   }
    // }
}
