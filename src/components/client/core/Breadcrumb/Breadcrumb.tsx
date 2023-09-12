import { Fragment } from "react";
import { FiChevronRight as ChevronRightIcon } from "react-icons/fi";

import Icon from "components/client/core/Icon/Icon";
import { Text } from "components/universal";
import { panda } from "generated/panda/jsx";

export interface Props {}

/**
 * Core UI breadcrumb.
 */

const Breadcrumb = ({}: Props) => {
  //   const pathname = usePathname();
  const pathname =
    "https://mirageswap-app.vercel.app/ethereum/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";
  // https://www.freeridemn.com/trails/lebanon-hills-regional-park/trail/lebanon-hills-beginner-loop

  console.log(
    pathname
      .split("/")
      .slice(3)
      .map((segment) => segment),
  );
  return (
    <panda.div
      display="flex"
      //   borderRadius="md"
      //   backgroundColor="bg.default"
      //   boxShadow="lg"
      //   borderColor="fg.default"
      gap={2}
      alignItems="center"
      p={2}
    >
      <Text>🏝️</Text>
      {pathname ? (
        <>
          <Icon as={ChevronRightIcon} color="accent.emphasized" />
          {pathname
            .split("/")
            .slice(3)
            .map((segment, index, array) => {
              return (
                <Fragment key={segment}>
                  <Text key={segment}>{segment}</Text>

                  {index !== array.length - 1 ? (
                    <Icon as={ChevronRightIcon} color="accent.emphasized" />
                  ) : null}
                </Fragment>
              );
            })}
        </>
      ) : null}

      {/* <Suspense>
        <Params />
      </Suspense> */}
    </panda.div>
  );
};

export default Breadcrumb;

// const Params = () => {
//   const searchParams = useSearchParams()!;

//   return searchParams.toString().length !== 0 ? (
//     <panda.div>
//       <Text>?</Text>
//       {Array.from(searchParams.entries()).map(([key, value], index) => {
//         return (
//           <Fragment key={key}>
//             {index !== 0 ? <Text>&</Text> : null}
//             <panda.div>
//               <Text key={key}>{key}</Text>
//               <Text>=</Text>
//               <Text key={value}>{value}</Text>
//             </panda.div>
//           </Fragment>
//         );
//       })}
//     </panda.div>
//   ) : null;
// };
