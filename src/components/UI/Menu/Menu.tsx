import Menu from '@mui/material/Menu';
import {ReactElement, MouseEvent, useState} from "react";
import {ReactElementProps} from "../../../types";
import {MenuProps as MuiMenuProps} from "@mui/material";
import {withStyles} from "@mui/styles";

interface MenuProps extends MuiMenuProps {
    content: ReactElement
    open?: boolean
    anchorX?: string
    anchorY?: string
}

export default (props: MenuProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const {anchorX, anchorY} = props


    return (
        <div>
            <div aria-controls={open ? 'menu' : undefined}
                 aria-haspopup="true"
                 aria-expanded={open ? 'true' : undefined}
                 onClick={handleClick}>
                {props.children}
            </div>

            <Menu id="menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  className={props.className}
                  PaperProps={{
                      style: {
                          left: '50%',
                          transform: `translateX(${anchorX || 0}) translateY(${anchorY || 0})`,
                      }
                  }}
                  MenuListProps={{
                      style: {
                          padding: 0,
                      },
                  }}>
                <div className="dark:bg-dark-500">
                    {props.content}
                </div>
            </Menu>
        </div>
    );
}
