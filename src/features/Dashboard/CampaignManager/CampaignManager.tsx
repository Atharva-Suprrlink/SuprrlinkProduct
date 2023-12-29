import { Badge } from "@chakra-ui/react";
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
import { MiniDashWrapper } from "@/components/MiniDashWrapper";
import styles from "./CampaignManager.module.scss";
import { ChevronRight } from "@/components/svg/ChevronRight";
import { Button } from "@/components/ui-kit/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CampaignManager = () => {
  const router = useRouter();
  return (
    <MiniDashWrapper active="campaignmanager">
      <div className={styles.root}>
        <div className={styles.content}>
          <div className={styles.sectionOne}>
            <span>Home</span>
            <ChevronRight />
            <span>Campaigns Manager</span>
          </div>

          <div className={styles.sectionTwo}>
            <div className={styles.titleContainer}>
              <div>Campaigns Manager</div>
              <p>Create, track, and manage your influencer campaigns here</p>
            </div>

            <div>
              <Button
                label="Create campaign"
                showIcon
                onPress={() =>
                  router.push("campaignmanager/createcampaign")
                }
              />
            </div>
          </div>

          <TableContainer style={{ width: "100%" }}>
            <Table variant="striped" colorScheme="brand.500">
              {" "}
              {/*color scheme is not applicable for striped thts wh i added manual colors to some rows*/}
              <Thead style={{ background: "#F2F2F2" }}>
                <Tr>
                  <Th width="full">CAMPAIGN TITLE</Th>
                  <Th>CREATED ON</Th>
                  <Th>TOTAL CLICKS</Th>
                  <Th>AMOUNT SPENT</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <div className={styles.tableCell}>
                      <p>#1 Xartup first ever campaign</p>
                      <div className={styles.imp}>ACTIVE</div>
                    </div>
                  </Td>
                  <Td>
                    <div className={styles.data}>01 Sept 2023</div>
                  </Td>
                  <Td>
                    <div className={styles.data}>54,200 clicks</div>
                  </Td>
                  <Td>
                    <div className={styles.data}>$4,200</div>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <div className={styles.tableCell}>
                      <p>#2 Xartup second campaign</p>
                      <div
                        className={styles.imp}
                        style={{ background: "#ECF4F8", color: "#0b2a31" }}
                      >
                        ENDED
                      </div>
                    </div>
                  </Td>
                  <Td>
                    <div className={styles.data}>23 Aug 2023</div>
                  </Td>
                  <Td>
                    <div className={styles.data}>154,200 clicks</div>
                  </Td>
                  <Td>
                    <div className={styles.data}>$9,100</div>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <div className={styles.tableCell}>
                      <p>#3 Xartup third successful campaign</p>
                      <div
                        className={styles.imp}
                        style={{ background: "#ECF4F8", color: "#0b2a31" }}
                      >
                        ENDED
                      </div>
                    </div>
                  </Td>
                  <Td>
                    <div className={styles.data}>20 Aug 2023</div>
                  </Td>
                  <Td>
                    <div className={styles.data}>54,200 clicks</div>
                  </Td>
                  <Td>
                    <div className={styles.data}>$4,200</div>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <div className={styles.greytext}>
            You have created the maximum campaigns on your current plan
          </div>

          <div className={styles.banner}>
            <div className={styles.bannerContent}>
              <div className={styles.bannerTitle}>
                Suprrlink has a plan that matches your requirements
              </div>
              <div className={styles.bannerSubTitle}>
                Suprrlink is a complete influencer marketing solution that has a
                variety of plans to fit your requirements of any scale.
              </div>
              <div className={styles.bannerButton}>
                <Button label="Upgrade to premium" />
                <Button
                  label="See all plans"
                  bgColor="#DEF0FC"
                  labelColor="#005AA3"
                />
              </div>
            </div>

            <Image
              src="/BannerImage.png"
              width={153}
              height={192}
              alt="bannerimage"
              style={{ position: "relative" }}
            />
          </div>
        </div>
      </div>
    </MiniDashWrapper>
  );
};

export default CampaignManager;
