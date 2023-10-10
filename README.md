practice next13 app dir with react server component

useing [daisay ui](https://daisyui.com/) for ui

using [tmdb](https://developer.themoviedb.org/reference/intro/getting-started) api

## probloms I've met
### rsc can't be rerendered
in home page, i'm using nested rsc and client component, i was planing to use setState to switch tabs and pass something like props to rerender rsc by new fetch data.

however, the only way to rerender rsc is use router and push a new path or reload whole page.

finally i use a parent rsc to fetch all tabs data in first time to render mutipul rsc, then pass these mutipul rsc as children to a client component, then use state to control which rsc should be rendered in client component.
   
## responsive css var calc
in large card, use calc(css var) to get width

## daisy ui bug in collapse
hight is not working in collapse

found [solution](https://github.com/saadeghi/daisyui/discussions/1110#discussioncomment-3616445)

## daisy has invalid CSSProperties
in radial-progress, daisy use --value to set progress, however react CSSProperties doesn't has this field

use declare module "react" to extend react CSSProperties