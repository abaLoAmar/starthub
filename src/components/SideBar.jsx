import * as React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';

const SidebarContainer = styled('div')(({ theme, width }) => ({
  width: width || 350,
  height: '50vh',
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '5px 0 5px 0 rgb(196,196,196)',
  marginTop: '15px',
  position: 'relative',
  left: 0,
  zIndex: theme.zIndex.drawer,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  textAlign:'center',
  
  [theme.breakpoints.down('md')]: {
    width: 70,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(2), // Margin top
    paddingBottom: theme.spacing(2), // Margin bottom
    gap: theme.spacing(2), // Space between icons
    textAlign:'center',
    tectAlign:'center'
  },
}));

const SidebarItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1),
  justifyContent: 'center',
  width: '100%',
  
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0.5, 0),
    marginBottom: theme.spacing(1), // Margin between items in mobile
    width: 'auto',
  },
}));

const SidebarBadge = styled(Badge)(({ theme }) => ({
  '.MuiBadge-dot': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const SideBar = () => {
  const [sidebarWidth, setSidebarWidth] = React.useState(350);

  const handleWidthToggle = () => {
    setSidebarWidth(prevWidth => (prevWidth === 350 ? 70 : 350));
  };

  return (
    <SidebarContainer width={sidebarWidth}>
      <List>
        <SidebarItem button onClick={handleWidthToggle}>
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
            sx={{
              display: { xs: 'none', md: 'block' },
              width: { xs: '0px', md: 'auto' },
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              marginLeft: { xs: 0, md: 2 },
            }}
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
            sx={{
              display: { xs: 'none', md: 'block' },
              width: { xs: '0px', md: 'auto' },
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              marginLeft: { xs: 0, md: 2 },
            }}
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
            sx={{
              display: { xs: 'none', md: 'block' },
              width: { xs: '0px', md: 'auto' },
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              marginLeft: { xs: 0, md: 2 },
            }}
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
            sx={{
              display: { xs: 'none', md: 'block' },
              width: { xs: '0px', md: 'auto' },
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              marginLeft: { xs: 0, md: 2 },
            }}
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
            sx={{
              display: { xs: 'none', md: 'block' },
              width: { xs: '0px', md: 'auto' },
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              marginLeft: { xs: 0, md: 2 },
            }}
          />
        </SidebarItem>
      </List>
    </SidebarContainer>
  );
};

export default SideBar;
