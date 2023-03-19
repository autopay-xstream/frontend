import { formatFlowrate, truncateAddress } from "@/helpers/formatHelper";
import { fetchxStreamOutflow } from "@/helpers/xStreamSubgraph";
import useXStream from "@/hooks/xStream/useXStream";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NotificationTemplate = (props) => {
  const [userEvents, setUserEvents] = useState([]);
  const route = useRouter();
  const hookXStream = useXStream();

  const handleRoute = (index, data) => {
    console.log("Routing");
    route.push({
      pathname: `/stream/${index}`,
      query: { data: JSON.stringify(data)},
    });
  };

  useEffect(() => {
    if (props.userAddress) {
      console.log("calling the subgraph");
      const getEvents = async () => {
        const result = await hookXStream.querySubgraph(
          "Outgoing",
          "",
          props.subgraphURI
        );
        console.log(result);
        // setUserEvents(result.data?.xStreamFlowTriggers);
      };
      getEvents();
    }
  }, [props.userAddress]);

  return (
    <div className="main-container w-full h-screen">
      <div className={`mx-auto mt-16 rounded-3xl  bg-white w-full max-w-6xl `}>
        <table className=" rounded-3xl overflow-hidden w-full">
          <thead>
            <tr>
              <TableHead>Status Update</TableHead>
              <TableHead>Receipient</TableHead>
              <TableHead>Token Amount</TableHead>
              <TableHead>Amount/day</TableHead>
              <TableHead></TableHead>
            </tr>
          </thead>
          <tbody>
            {hookXStream?.userEvents.map((item, index) => {
              return (
                <>
                  <TableRow>
                    <TableData>
                      {item.createdAtTimestamp == item.updatedAtTimestamp ? "Initiated" : "Updated"}
                    </TableData>
                    <TableData>{truncateAddress(item.receiver?.id)}</TableData>
                    <TableData></TableData>
                    <TableData>{formatFlowrate(item.currentFlowRate)}</TableData>
                    <a onClick={() => handleRoute(index, item)}>
                      <TableData>
                        <Image
                          src={require("../image/link.png")}
                          style={{
                            width: 50,
                            height: 50,
                          }}
                          alt="link"
                        />
                      </TableData>
                    </a>
                  </TableRow>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TableData = ({ children }) => {
  return (
    <td className="text-[#464646] py-4 font-medium text-sm">{children}</td>
  );
};
const TableHead = ({ children }) => {
  return (
    <th className="text-[#464646] py-4 border-none font-medium text-sm opacity-40">
      {children}
    </th>
  );
};

export const TableRow = ({ children }) => {
  return <tr className="border-t-[1px] border-[#e3e2e2]">{children}</tr>;
};

export default NotificationTemplate;
