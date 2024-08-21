import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';

const SidebarContainer = styled('div')(({ theme }) => ({
  width: 350,
  height: '100vh',
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  right: 0,
  top: '90px',
  boxShadow: '5px 0 5px 0 rgba(196,196,196,0.5)',
  marginTop: '15px',

  [theme.breakpoints.down('md')]: {
    width: 70,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    gap: theme.spacing(2),
    boxShadow: '2px 0 4px rgba(0,0,0,0.2)',
  },
}));

const SidebarItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1),
  justifyContent: 'center',
  width: '100%',

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0.5, 0),
    marginBottom: theme.spacing(1),
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(1), // Space between items
  },
}));

const SidebarBadge = styled(Badge)(({ theme }) => ({
  '.MuiBadge-dot': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const OnlineCollabs = () => {
  return (
    <SidebarContainer>
      <List>
        <SidebarItem button>
          <ListItemIcon>
            <SidebarBadge badgeContent={14} color="primary">
              <img
                src="/assets/images/icons/left-sidebar/post.png"
                width='30px'
                alt="Post Icon"
              />
            </SidebarBadge>
          </ListItemIcon>
          <ListItemText
            primary="News Feed"
            sx={{ display: { xs: 'none', md: 'block' } }}
          />
        </SidebarItem>
        <SidebarItem button>
          <ListItemIcon>
            <SidebarBadge badgeContent={4} color="primary">
              <img
                src="/assets/images/icons/left-sidebar/mail.png"
                width='30px'
                alt="Mail Icon"
              />
            </SidebarBadge>
          </ListItemIcon>
          <ListItemText
            primary="Messages"
            sx={{ display: { xs: 'none', md: 'block' }, fontWeight: '900', fontSize: '14px' }}
          />
        </SidebarItem>
        <SidebarItem button>
          <ListItemIcon>
            <img
              src="/assets/images/icons/left-sidebar/human-resources.png"
              width='30px'
              alt="Human Resources Icon"
            />
          </ListItemIcon>
          <ListItemText
            primary="Groups-Collaborate"
            sx={{ display: { xs: 'none', md: 'block' } }}
          />
        </SidebarItem>
        <SidebarItem button>
          <ListItemIcon>
            <SidebarBadge badgeContent={2} color="primary">
              <img
                src="/assets/images/icons/left-sidebar/planner.png"
                width='30px'
                alt="Planner Icon"
              />
            </SidebarBadge>
          </ListItemIcon>
          <ListItemText
            primary="Events"
            sx={{ display: { xs: 'none', md: 'block' } }}
          />
        </SidebarItem>
        <SidebarItem button>
          <ListItemIcon>
            <img
              src="/assets/images/icons/left-sidebar/communicate.png"
              width='30px'
              alt="Communicate Icon"
            />
          </ListItemIcon>
          <ListItemText
            primary="Contact Us"
            sx={{ display: { xs: 'none', md: 'block' } }}
          />
        </SidebarItem>
      </List>
    </SidebarContainer>
  );
};

export default OnlineCollabs;
