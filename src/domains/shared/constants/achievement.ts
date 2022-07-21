export type AchievementType = 'post' | 'crew' | 'comment';
export type AchievementGrade = 'littleDew' | 'bigDew' | 'rainDrop';

export interface AchieveValue {
  logo: string;
  description: string;
}

export const CREW_ACHIEVEMENT: Record<AchievementGrade, AchieveValue> = {
  littleDew: {
    logo: '/achievement/littleCrew.svg',
    description: '크루 1명 이상!',
  },
  bigDew: {
    logo: '/achievement/littleCrew.svg',
    description: '크루 10명 이상!',
  },
  rainDrop: {
    logo: '/achievement/littleCrew.svg',
    description: '크루 30명 이상!',
  },
};

export const POST_ACHIEVEMENT: Record<AchievementGrade, AchieveValue> = {
  littleDew: {
    logo: '/achievement/littlePost.svg',
    description: '글 1개 이상!',
  },
  bigDew: {
    logo: '/achievement/bigPost.svg',
    description: '글 10개 이상!',
  },
  rainDrop: {
    logo: '/achievement/raindropPost.svg',
    description: '글 30개 이상!',
  },
};

export const COMMENT_ACHIEVEMENT: Record<AchievementGrade, AchieveValue> = {
  littleDew: {
    logo: '/achievement/littleComment.svg',
    description: '댓글 1개 이상!',
  },
  bigDew: {
    logo: '/achievement/bigComment.svg',
    description: '댓글 10개 이상!',
  },
  rainDrop: {
    logo: '/achievement/rainDropComment.svg',
    description: '댓글 30개 이상!',
  },
};

export const getAchievementGrades = (count: number): AchievementGrade[] => {
  const grades: AchievementGrade[] = [];

  if (count > 0) {
    grades.push('littleDew');
  }

  if (count >= 10) {
    grades.push('bigDew');
  }

  if (count >= 30) {
    grades.push('rainDrop');
  }

  return grades;
};
