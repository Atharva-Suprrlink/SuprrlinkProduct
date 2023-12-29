import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { ChevronRight } from "@/components/svg/ChevronRight";
import styles from "./MyCampaign.module.scss";
import { Tooltip } from "@chakra-ui/react";
import { Button } from "@/components/ui-kit/Button";
import { CaretCircleDown } from "@/components/svg/CaretCircleDown";
import { Card } from "@/components/Card";

const MyCampaign = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.sectionOne}>
          <span>Home</span>
          <ChevronRight />
          <span>Campaigns Manager</span>
          <ChevronRight />
          <span>My Campaign</span>
        </div>

        <div className={styles.sectionTwo}>
          <div className={styles.title}>
            <p>#1 Xartup first ever campaign</p>
            <div className={styles.imp}>ACITVE</div>
          </div>
          <div className={styles.buttonContainer}>
            <Tooltip
              label="Upgrade your account to use this feature and boost your campaigns as ads on instagram"
              placement="top"
              hasArrow
            >
              <div className={styles.disabledButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M13 5H11V3.5C11 2.70435 10.6839 1.94129 10.1213 1.37868C9.55871 0.81607 8.79565 0.5 8 0.5C7.20435 0.5 6.44129 0.81607 5.87868 1.37868C5.31607 1.94129 5 2.70435 5 3.5V5H3C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V6C14 5.73478 13.8946 5.48043 13.7071 5.29289C13.5196 5.10536 13.2652 5 13 5ZM8.5 9.91438V11.5C8.5 11.6326 8.44732 11.7598 8.35355 11.8536C8.25979 11.9473 8.13261 12 8 12C7.86739 12 7.74021 11.9473 7.64645 11.8536C7.55268 11.7598 7.5 11.6326 7.5 11.5V9.91438C7.16639 9.79643 6.88522 9.56434 6.70618 9.25914C6.52715 8.95393 6.46177 8.59526 6.5216 8.24651C6.58144 7.89776 6.76264 7.58139 7.03317 7.35332C7.3037 7.12525 7.64616 7.00016 8 7.00016C8.35384 7.00016 8.6963 7.12525 8.96683 7.35332C9.23736 7.58139 9.41856 7.89776 9.4784 8.24651C9.53823 8.59526 9.47285 8.95393 9.29382 9.25914C9.11478 9.56434 8.83361 9.79643 8.5 9.91438ZM10 5H6V3.5C6 2.96957 6.21071 2.46086 6.58579 2.08579C6.96086 1.71071 7.46957 1.5 8 1.5C8.53043 1.5 9.03914 1.71071 9.41421 2.08579C9.78929 2.46086 10 2.96957 10 3.5V5Z"
                    fill="#76747C"
                  />
                </svg>
                <span>Boost campaign</span>
              </div>
            </Tooltip>
            <Button label="Download report" />
          </div>
        </div>

        <div className={styles.sectionThree}>
          <div className={styles.sectionTitle}>
            <span>Most important details</span>
            <CaretCircleDown />
          </div>

          <div className={styles.cardsContainer}>
            <Card
              title="Total clicks"
              sidetitle="Last 24 hours"
              mainheading="5,400"
              subtitle="Each click has a unique user id"
              subtitle1={true}
              subtitle2={false}
            />
            <Card
              title="Total spent"
              sidetitle="Last 24 hours"
              mainheading="₹64,250"
              subtitle="+2.45%"
              subtitle1={false}
              subtitle2={true}
            />
            <Card
              title="Top locations"
              sidetitle="Last 28 days"
              mainheading="Karnataka"
              subtitle1={false}
              subtitle2={false}
            />
          </div>

          <div className={styles.sectionTitle}>
            <span>Creator details</span>
            <CaretCircleDown />
          </div>

          <div className={styles.tableContainer}>
            <div className={styles.tableHeader}>
              <div className={styles.tableName}>
                <div className={styles.heading}>Creators on camapaign</div>
                <div className={styles.dataNumber}>3</div>
              </div>
            </div>

            <TableContainer style={{ width: "100%" }}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th width="full">Creator Name</Th>
                    <Th>Post Status</Th>
                    <Th>Cost Per Click</Th>
                    <Th>Spent</Th>
                    <Th>Total Clicks</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <div className={styles.dataTitle}>
                        <div
                          className={styles.dataSymbol}
                          style={{ color: "#6041CE", background: "#EEE9FF" }}
                        >
                          J
                        </div>
                        <p>Jagdeesh Sharma</p>
                      </div>
                    </Td>
                    <Td>
                      <div className={styles.statusContainer}>
                        <span></span>
                        <div>Active</div>
                      </div>
                    </Td>
                    <Td style={{ textAlign: "center" }}>$0.2</Td>
                    <Td style={{ textAlign: "center" }}>$1200</Td>
                    <Td style={{ textAlign: "center" }}>32,200</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <div className={styles.dataTitle}>
                        <div
                          className={styles.dataSymbol}
                          style={{ color: "#329330", background: "#D7F4D6" }}
                        >
                          G
                        </div>
                        <p>Gulvinder Singh</p>
                      </div>
                    </Td>
                    <Td>
                      <div className={styles.statusContainer}>
                        <span></span>
                        <div>Active</div>
                      </div>
                    </Td>
                    <Td style={{ textAlign: "center" }}>$0.2</Td>
                    <Td style={{ textAlign: "center" }}>$1200</Td>
                    <Td style={{ textAlign: "center" }}>32,200</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <div className={styles.dataTitle}>
                        <div
                          className={styles.dataSymbol}
                          style={{ color: "#A22E2E", background: "#EBD1D1" }}
                        >
                          C
                        </div>
                        <p>Carry Minati</p>
                      </div>
                    </Td>
                    <Td>
                      <div className={styles.statusContainer}>
                        <span></span>
                        <div>Active</div>
                      </div>
                    </Td>
                    <Td style={{ textAlign: "center" }}>$0.2</Td>
                    <Td style={{ textAlign: "center" }}>$1200</Td>
                    <Td style={{ textAlign: "center" }}>32,200</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </div>

          <div className={styles.sectionTitle}>
            <span>Audience details</span>
            <CaretCircleDown />
          </div>

          <div className={styles.audienceContainer}>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCampaign;
