import { FormBuilder, Validators } from '@angular/forms';
import {
  ChronicDisease,
  Diagnosis,
  Manifestation,
  VisualImpairment,
} from '../../../core/models/special-needs.model';
import { enumValidator } from '../../validators/enum.validator';
import { Semester } from '../../../core/models/senior-highschool.model';

export function buildRegistrationForm(formBuilder: FormBuilder) {
  return formBuilder.group({
    learnerReferenceNo: [''],
    schoolYear: [''],
    gradeLevelToEnroll: formBuilder.group({
      graded: formBuilder.group({
        isGraded: [false],
        gradeLevel: [''],
      }),
      nonGraded: formBuilder.group({
        isNonGraded: [false],
      }),
    }),
    personalInfo: formBuilder.group({
      psaBirthCertificateNo: [''],
      firstName: [''],
      lastName: [''],
      middleName: [''],
      extensionName: [''],
      birthDate: [''],
      age: [''],
      sex: [''],
      placeOfBirth: [''],
      religion: [''],
      motherTounge: [''],
      isIndigenousCommunityMemeber: [false],
      community: [''],
      is4PsBeneficiary: [false],
      houseHoldIdNumber: [''],
      currentAddress: formBuilder.group({
        houseNo: [''],
        streetName: [''],
        barangay: [''],
        municipalityCity: [''],
        province: [''],
        country: [''],
        zipCode: [''],
      }),
      permanentAddress: formBuilder.group({
        isCurrentAddress: [false],
        houseNo: [''],
        streetName: [''],
        barangay: [''],
        municipalityCity: [''],
        province: [''],
        country: [''],
        zipCode: [''],
      }),
    }),

    parentGuardiansInfo: formBuilder.group({
      father: formBuilder.group({
        lastName: [''],
        firstName: [''],
        middleName: [''],
        contactNumber: [''],
      }),
      mother: formBuilder.group({
        lastName: [''],
        firstName: [''],
        middleName: [''],
        contactNumber: [''],
      }),
      guardian: formBuilder.group({
        lastName: [''],
        firstName: [''],
        middleName: [''],
        contactNumber: [''],
      }),
    }),
    specialNeeds: formBuilder.group({
      isUnderSpecialNeedsProgram: [false],
      withDiagnosis: [null, enumValidator(Diagnosis)],
      withManifestations: [null, enumValidator(Manifestation)],
      withChronicDisease: [null, enumValidator(ChronicDisease)],
      withVisualImpairment: [null, enumValidator(VisualImpairment)],
      hasPwdId: [false],
    }),
    returningLearner: formBuilder.group({
      lastGradeLevelCompleted: [''],
      lastSchoolAttended: [''],
      lastSchoolYearCompleted: [''],
      schoolId: [''],
    }),
    seniorHighSchool: formBuilder.group({
      semester: [null, enumValidator(Semester)],
      track: [''],
      strand: [''],
    }),
    preferredLearningModalities: formBuilder.group({
      blended: [false],
      educationalTelevision: [false],
      homeSchooling: [false],
      modularDigital: [false],
      modularPrint: [false],
      online: [false],
      radioBased: [false],
    }),
    declaration: formBuilder.group({
      agreed: [false],
      printedName: [''],
      dateAgreed: [''],
    }),
  });
}
