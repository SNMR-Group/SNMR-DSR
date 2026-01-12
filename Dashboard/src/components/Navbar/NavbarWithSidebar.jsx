import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useTheme } from '@mui/material/styles';
import logo from '../../assets/logo-l.png'; // Adjust the relative path based on your file location

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/dashboard'
  },
  {
    segment: 'dsr',
    title: 'DSR',
    icon: <ShoppingCartIcon />,
    children: [
      {
        segment: 'add-dsr',
        title: 'DSRForm',
        icon: <DescriptionIcon />,
        path: '/dsr/add-dsr'
      },
      {
        segment: 'dsr-table',
        title: 'DSRTable',
        icon: <DescriptionIcon />,
        path: '/dsr/dsr-table'
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
        path: '/reports/sales'
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
        path: '/reports/traffic'
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
    path: '/integrations'
  },
];

export default function NavbarWithSidebar({ children }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const enhancedNavigation = NAVIGATION.map(item => {
    if (item.kind === 'header' || item.kind === 'divider') {
      return item;
    }
    
    if (item.children) {
      return {
        ...item,
        children: item.children.map(child => ({
          ...child,
          onClick: () => navigate(child.path)
        }))
      };
    }
    
    return {
      ...item,
      onClick: () => navigate(item.path)
    };
  });

  const router = {
    pathname: window.location.pathname,
    searchParams: new URLSearchParams(window.location.search),
    navigate: (path) => navigate(path),
  };

  return (
    <AppProvider
      navigation={enhancedNavigation}
      router={router}
      theme={theme}
    >
      <DashboardLayout
        branding={{
          logo: (
            <img
              src={logo}
              alt="My Logo"
              style={{ height: 40, marginRight: 8 }}
            />
          ),
          title: 'SNMR-DSR',
        }}
      >
        {children}
      </DashboardLayout>
    </AppProvider>
  );
}