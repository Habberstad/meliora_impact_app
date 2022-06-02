import {
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";

export const NavbarDropDown = (props) => {
  const handleLogoutClick = () => {
    window.location.href = window.location.origin + "/auth/logout";
  };
  console.log(props.user);

  return (
    <Menu
      anchorEl={props.anchorEl}
      id="account-menu"
      open={props.open}
      onClose={props.onClose}
      onClick={props.onClose}
      PaperProps={{
        elevation: 0,
        sx: {
          minWidth: "200px",
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          borderRadius: "10px",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Typography
        variant={"h6"}
        type={"p"}
        mx={"1rem"}
        sx={{ fontSize: "0.9rem", fontWeight: "600" }}
      >
        {props.user.name}
      </Typography>
      <Typography
        variant={"h6"}
        type={"p"}
        mx={"1rem"}
        mb={"0.7rem"}
        sx={{ fontSize: "0.875rem" }}
      >
        {props.user.email}
      </Typography>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add user
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogoutClick}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};
