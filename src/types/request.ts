export type BloodRequest = {
  name: string;
  age: number;
  blood: string;
  units: number;
  hospital: string;
  when: string;
  urgent: boolean;
  reason: string;
  image: string;
};

/** Which recipient blood groups a given donor blood group can donate to. */
export type DonorCompatibilityMap = Record<string, string[]>;
