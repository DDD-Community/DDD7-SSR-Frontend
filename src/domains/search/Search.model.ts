import { AccountDetail } from '../shared/model/account';
import { PostDetail } from '../shared/model/post';
import { PaginationData } from '../shared/model/shared';

export type SearchPostList = PaginationData<PostDetail>;
export type SearchAccountList = PaginationData<AccountDetail>;
