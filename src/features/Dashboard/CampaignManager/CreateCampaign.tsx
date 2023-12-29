import { ChevronRight } from "@/components/svg/ChevronRight";
import {
  Input,
  Select,
  Stack,
  FormControl,
  RadioGroup,
  Radio,
  Textarea,
} from "@chakra-ui/react";
import styles from "./CreateCampaign.module.scss";
import { Button } from "@/components/ui-kit/Button";
import { Tent } from "@/components/svg/Tent";
import { UserFilled } from "@/components/svg/UserFilled";
import { useState } from "react";
import { Files } from "@/components/svg/Files";
import { CardHolder } from "@/components/svg/CardHolder";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { SparkleFilled } from "@/components/svg/SparkleFilled";
import { CheckCircle } from "@/components/svg/CheckCircle";
import Image from "next/image";

const CreateCampaign = () => {
  const [value, setValue] = useState("1");
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.sectionOne}>
          <span>Home</span>
          <ChevronRight />
          <span>Campaigns Manager</span>
          <ChevronRight />
          <span>Create a Campaign</span>
        </div>

        <div className={styles.sectionTwo}>
          <div className={styles.titleContainer}>
            <div>Create a Campaign</div>
            <p>
              Give details, choose creators, and create an influencer campaign{" "}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.5rem",
            }}
          >
            <Button
              label="Save as drafts"
              bgColor="#DEF0FC"
              labelColor="#005AA3"
            />
            <Button label="Create campaign" />
          </div>
        </div>

        <div className={styles.sectionThree}>
          <div className={styles.leftPane}>
            <div className={styles.formBoxContainer}>
              <div className={styles.formTitleContainer}>
                <div className={styles.titleSymbolContainer}>
                  <Tent />
                </div>
                <div className={styles.formTitleContent}>
                  <div className={styles.formContent1}>About the campaign</div>
                  <div className={styles.formContent2}>
                    Enter all campaign details that will help you proceed to the
                    next steps
                  </div>
                </div>
              </div>

              <div className={styles.formInputContainer}>
                <label className={styles.label} htmlFor="campaignName">
                  My Input
                </label>
                <Input
                  id="campaignName"
                  placeholder="Eg, Suprrlink superstar campaign"
                  size="md"
                />
                <label className={styles.label} htmlFor="platforms">
                  Target platforms
                </label>
                <Select id="platforms" placeholder="Select platfroms">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <label className={styles.label} htmlFor="platforms">
                  Campaign objective
                </label>
                <Select id="platforms" placeholder="Select objective">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </div>
            </div>

            <div className={styles.formBoxContainer}>
              <div className={styles.formTitleContainer}>
                <div className={styles.titleSymbolContainer}>
                  <UserFilled />
                </div>
                <div className={styles.formTitleContent}>
                  <div className={styles.formContent1}>About the audience</div>
                  <div className={styles.formContent2}>
                    Enter all audience details to target the campaigns to the
                    right people
                  </div>
                </div>
              </div>

              <div className={styles.formInputContainer}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    alignSelf: "stretch",
                  }}
                >
                  <label className={styles.label} htmlFor="genders">
                    Gender
                  </label>
                  <Select id="genders" placeholder="Select gender">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    alignSelf: "stretch",
                  }}
                >
                  <label className={styles.label} htmlFor="age">
                    Age group
                  </label>
                  <RadioGroup onChange={setValue} value={value}>
                    <Stack direction="row">
                      <Radio value="1">First</Radio>
                      <Radio value="2">Second</Radio>
                      <Radio value="3">Third</Radio>
                    </Stack>
                  </RadioGroup>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    alignSelf: "stretch",
                  }}
                >
                  <label className={styles.label} htmlFor="locations">
                    Location
                  </label>
                  <Select id="locations" placeholder="Select location">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </div>
              </div>
            </div>

            <div className={styles.formBoxContainer}>
              <div className={styles.formTitleContainer}>
                <div className={styles.titleSymbolContainer}>
                  <Files />
                </div>
                <div className={styles.formTitleContent}>
                  <div className={styles.formContent1}>Additional details</div>
                  <div className={styles.formContent2}>
                    Enter more details about the campaign to help influencers
                    understand the task
                  </div>
                </div>
              </div>

              <div className={styles.formInputContainer}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    alignSelf: "stretch",
                  }}
                >
                  <div className={styles.inputTitleContainer}>
                    <label className={styles.label} htmlFor="about">
                      Tell us what your campaign is about
                    </label>
                    <span>0 / 500 words</span>
                  </div>
                  <Textarea placeholder="Write here..." />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    alignSelf: "stretch",
                  }}
                >
                  <div className={styles.inputTitleContainer}>
                    <label className={styles.label} htmlFor="about">
                      Additional comments
                    </label>
                    <span>0 / 100 words</span>
                  </div>
                  <Textarea placeholder="Write here..." />
                </div>
              </div>
            </div>
            <div className={styles.formBoxContainer}>
              <div className={styles.formTitleContainer}>
                <div className={styles.titleSymbolContainer}>
                  <CardHolder />
                </div>
                <div className={styles.formTitleContent}>
                  <div className={styles.formContent1}>Campaign settings</div>
                  <div className={styles.formContent2}>
                    Set a campaign budget and a date to begin your campaign
                  </div>
                </div>
              </div>

              <div className={styles.formInputContainer}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    alignSelf: "stretch",
                  }}
                >
                  <label className={styles.label} htmlFor="campaignBudget">
                    Campaign budget
                  </label>
                  <Input
                    id="campaignBudget"
                    placeholder="₹ 200,000"
                    size="md"
                  />
                </div>

                <div className={styles.calendarContainer}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      alignSelf: "stretch",
                    }}
                  >
                    <label className={styles.label} htmlFor="startdate">
                      Start date
                    </label>
                    <DatePicker oneTap style={{ width: 200 }} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      alignSelf: "stretch",
                    }}
                  >
                    <label className={styles.label} htmlFor="enddate">
                      End date
                    </label>
                    <DatePicker oneTap style={{ width: 200 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightpane}>
            <div className={styles.rightpaneUpperBox}>
              <div className={styles.rightPaneBox1}>
                <SparkleFilled />
                <div>Pro tips</div>
                <p>
                  These tips are curated by our campaign experts to run a
                  successful campaign
                </p>
              </div>
              <div className={styles.rightPaneBox2}>
                <CheckCircle />
                <p>This is how to create a successful campaign</p>
              </div>
              <div className={styles.rightPaneBox2}>
                <CheckCircle />
                <p>This is another tip to create a successful campaign</p>
              </div>
              <div className={styles.rightPaneBox2}>
                <CheckCircle />
                <p>This is the third tip to create a successful campaign</p>
              </div>
            </div>

            <div className={styles.bannerContainer}>
              <div className={styles.banner}>
                <div className={styles.bannerContent}>
                  <div className={styles.bannerContentTitle}>
                    Suprrlink has a plan that matches your requirements
                  </div>
                  <p>
                    Suprrlink is a complete influencer marketing solution that
                    has a variety of plans to fit your requirements of any
                    scale.
                  </p>
                  <div className={styles.bannerButtons}>
                    <Button label="Upgrade to premium" />
                    <Button
                      label="See all plans"
                      labelColor="#005AA3"
                      bgColor="#DEF0FC"
                    />
                  </div>
                </div>
              </div>
              <div style={{
                // position: 'relative',
                height: '5rem'
              }}>
                <Image
                  src="/BannerImage.png"
                  width={110}
                  height={0}
                  alt="bannerimage"
                  // layout="responsive"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
