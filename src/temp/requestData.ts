import type { BloodRequest, DonorCompatibilityMap } from "@/types/request";

export type { BloodRequest } from "@/types/request";

export const TABS = [
  "All requests",
  "Urgent only",
  "My city",
  "Compatible",
] as const;

export type RequestTab = (typeof TABS)[number];

export const BLOOD_GROUPS = [
  "A+",
  "A−",
  "B+",
  "B−",
  "O+",
  "O−",
  "AB+",
  "AB−",
] as const;

export const ALL_BLOOD = "All blood groups";

/** Demo values — in a real app these come from the signed-in user's profile. */
export const CURRENT_USER_CITY = "Dhaka";
export const CURRENT_USER_BLOOD = "O+";

/** Which recipient blood groups a given donor blood group can donate to. */
export const DONOR_CAN_GIVE_TO: DonorCompatibilityMap = {
  "O−": ["A+", "A−", "B+", "B−", "O+", "O−", "AB+", "AB−"],
  "O+": ["O+", "A+", "B+", "AB+"],
  "A−": ["A+", "A−", "AB+", "AB−"],
  "A+": ["A+", "AB+"],
  "B−": ["B+", "B−", "AB+", "AB−"],
  "B+": ["B+", "AB+"],
  "AB−": ["AB+", "AB−"],
  "AB+": ["AB+"],
};

export const requests: BloodRequest[] = [
  {
    name: "Mehedi Hasan",
    age: 32,
    blood: "B+",
    units: 2,
    hospital: "Square Hospital, Dhaka",
    when: "Today, 4:00 PM",
    urgent: true,
    reason: "Emergency surgery",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop&crop=faces",
  },
  {
    name: "Anika Sultana",
    age: 26,
    blood: "O−",
    units: 1,
    hospital: "Apollo Hospital, Dhaka",
    when: "Tomorrow, 11:00 AM",
    urgent: true,
    reason: "Delivery complication",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=faces",
  },
  {
    name: "Rakib Hossain",
    age: 45,
    blood: "A+",
    units: 3,
    hospital: "United Hospital, Dhaka",
    when: "Mar 22, 9:00 AM",
    urgent: false,
    reason: "Scheduled operation",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&h=160&fit=crop&crop=faces",
  },
  {
    name: "Tania Akter",
    age: 29,
    blood: "AB+",
    units: 1,
    hospital: "Evercare Hospital",
    when: "Mar 24, 5:30 PM",
    urgent: false,
    reason: "Thalassemia transfusion",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=160&h=160&fit=crop&crop=faces",
  },
  {
    name: "Imran Khan",
    age: 38,
    blood: "O+",
    units: 2,
    hospital: "BIRDEM, Dhaka",
    when: "Mar 25, 10:00 AM",
    urgent: false,
    reason: "Accident recovery",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces",
  },
  {
    name: "Sumi Akter",
    age: 22,
    blood: "A−",
    units: 1,
    hospital: "Labaid, Dhaka",
    when: "Mar 26, 2:00 PM",
    urgent: false,
    reason: "Cancer treatment",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop&crop=faces",
  },
];
