export const menuItems = [
  {
    displayName: 'Dashboard',
    route: 'dashboard',
    iconName: '../../../../assets/img/side_bar_icons/dashboard.png',

    children: [],
  },
  {
    displayName: 'Company Master',
    route: 'CompanyMaster',
    iconName: '../../../../assets/img/side_bar_icons/User Role Permission.svg',
    children: [],
  },
  {
    displayName: 'Role Master',
    route: 'RoleMaster',
    iconName: '../../../../assets/img/side_bar_icons/User Role Permission.svg',
    children: [],
  },
  {
    displayName: 'User Master',
    route: 'UserMaster',
    iconName: '../../../../assets/img/side_bar_icons/User Role Permission.svg',
    children: [],
  },
  {
    displayName: 'User Role Master',
    route: '',
    iconName: '../../../../assets/img/side_bar_icons/B Master.svg',
    children: [
      {
        displayName: 'Company',
        route: 'user-role-master/company-listing',
        iconName: '../../../../assets/img/side_bar_icons/B Company.svg',
        children: [],
      },
      {
        displayName: 'Department',
        route: 'user-role-master/department-listing',
        iconName: '../../../../assets/img/side_bar_icons/B Department.svg',
        children: [],
      },
      {
        displayName: 'Designation',
        route: 'user-role-master/designation-listing',
        iconName: '../../../../assets/img/side_bar_icons/B Designation.svg',
        children: [],
      },
    ],
  },
  {
    displayName: 'User Role Permission',
    route: 'UserRolePermission',
    iconName: '../../../../assets/img/side_bar_icons/User Role Permission.svg',
    children: [],
  },
  {
    displayName: 'Register Dummy Merchant Number',
    route: 'RegisterDummyMerchantNumber',
    iconName: '../../../../assets/img/side_bar_icons/User Role Permission.svg',
    children: [],
  },
  {
    displayName: 'Shop Master',
    route: 'ShopMaster',
    iconName: '../../../../assets/img/side_bar_icons/User Role Permission.svg',
    children: [],
  },
  {
    displayName: 'Approval Configuration',
    route: 'approveConfig',
    iconName: '../../../../assets/img/side_bar_icons/User Role Permission.svg',
    children: [],
  },
  {
    displayName: 'Change Password',
    route: 'ChangePassword',
    iconName: '../../../../assets/img/side_bar_icons/Change Password.svg',
    children: [],
  },
  {
    displayName: 'Logout',
    route: 'Logout',
    iconName: '../../../../assets/img/side_bar_icons/logout.png',
    children: [],
  },
];
