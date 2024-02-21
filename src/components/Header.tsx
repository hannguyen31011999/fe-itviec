import { Box, Typography } from "@mui/material";
import NavLinkCustom from "../common/NavLink";
import { flexBox, heightNavBar, pathPublic } from "../config/constants";
import { listRightHeader } from "../mockup/menu";
import { linearGradient, spacing } from "../theme/theme";

export default function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        background: linearGradient[100],
      }}
    >
      <Box
        sx={{
          ...flexBox,
          height: heightNavBar,
          margin: "0 auto",
          maxWidth: {
            desktop: 1860,
            laptop: 1140,
          },
          padding: "0 30px",
        }}
      >
        <Box
          sx={{
            ...flexBox,
          }}
        >
          <NavLinkCustom href="/">
            <img
              src={`${pathPublic}/assets/images/logo-itviec.png`}
              alt="logo-header"
              width={108}
              height={40}
            />
          </NavLinkCustom>
        </Box>
        <Box sx={{ ...flexBox, gap: spacing[200] }}>
          {listRightHeader.map(({ id, href, title }) => {
            return (
              <NavLinkCustom
                key={id}
                href={href}
                sx={{
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                <Typography variant="body">{title}</Typography>
              </NavLinkCustom>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
