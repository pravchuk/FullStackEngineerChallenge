import { helper } from '@ember/component/helper';

export function isReviewPending(params/*, hash*/) {
  let reviews = params[0];
  let currentUserId = params[1];
  reviews.forEach((review) => {
    if(review.status === "pending" && review.by === currentUserId){
      return true;
    }
  })
  return false;
}

export default helper(isReviewPending);
