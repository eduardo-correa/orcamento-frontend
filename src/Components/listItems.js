import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/Home';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LayersIcon from '@material-ui/icons/Layers';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <Link to="/home" style={{textDecoration: "none"}}>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Início" />
    </ListItem>
    </Link>

    <Link to="/acao" style={{textDecoration: "none"}}>
    <ListItem button>
      <ListItemIcon>
        <GroupWorkIcon />
      </ListItemIcon>
      <ListItemText primary="Ações" />
    </ListItem>
    </Link>
    
    <Link to="/ug" style={{textDecoration: "none"}}>
    <ListItem button>
      <ListItemIcon>
        <HomeWorkIcon />
      </ListItemIcon>
      <ListItemText primary="Unid. Gestoras" />
    </ListItem>
    </Link>
    
    <Link to="/arp" style={{textDecoration: "none"}}>
    <ListItem button>
      <ListItemIcon>
        <LibraryBooksIcon />
      </ListItemIcon>
      <ListItemText primary="ARP" />
    </ListItem>
    </Link>
    
    <Link to="/ddo" style={{textDecoration: "none"}}>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="DDO" />
    </ListItem>
    </Link>
    
    <Link to="/descentralizacao" style={{textDecoration: "none"}}>
    <ListItem button>
      <ListItemIcon>
        <OpenWithIcon />
      </ListItemIcon>
      <ListItemText primary="Descentralização" />
    </ListItem>
    </Link>
    
    <Link to="/nota_credito" style={{textDecoration: "none"}}>
    <ListItem button>
      <ListItemIcon>
        <LocalAtmIcon />
      </ListItemIcon>
      <ListItemText primary="Nota de Crédito" />
    </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Relatórios</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Por Ação" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Por Regional" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Por ano" />
    </ListItem>
  </div>
);