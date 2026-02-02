'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Icon } from '@iconify/react';
import { useCreateReview } from '@/services/queries';
import { cn } from '@/lib/utils';

type ReviewDialogProps = Readonly<{
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  restaurantId: string | number;
  restaurantName: string;
}>;

export function ReviewDialog({
  isOpen,
  onOpenChange,
  restaurantId,
  restaurantName,
}: ReviewDialogProps) {
  const [rating, setRating] = React.useState(5);
  const [comment, setComment] = React.useState('');
  const createReview = useCreateReview();

  const handleSubmit = () => {
    createReview.mutate(
      {
        restaurantId,
        star: rating,
        comment,
      },
      {
        onSuccess: () => {
          onOpenChange(false);
          setRating(5);
          setComment('');
        },
      }
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className='rounded-3xl sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='text-display-xs font-extrabold text-neutral-950'>
            Review {restaurantName}
          </DialogTitle>
        </DialogHeader>
        <div className='flex flex-col gap-6 py-4'>
          <div className='flex flex-col gap-2'>
            <span className='text-sm font-bold text-neutral-500'>Rating</span>
            <div className='flex items-center gap-2'>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type='button'
                  onClick={() => setRating(star)}
                  className='transition-transform hover:scale-110 active:scale-95'
                >
                  <span className='sr-only'>{star} Stars</span>
                  <Icon
                    icon='ri:star-fill'
                    className={cn(
                      'size-8',
                      star <= rating ? 'text-rating' : 'text-neutral-200'
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='review-comment'
              className='text-sm font-bold text-neutral-500'
            >
              Comment
            </label>
            <Textarea
              id='review-comment'
              placeholder='Tell us about your experience...'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className='min-h-32 resize-none rounded-2xl'
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            className='h-12 w-full rounded-2xl font-bold'
            onClick={handleSubmit}
            disabled={createReview.isPending}
          >
            {createReview.isPending ? 'Submitting...' : 'Submit Review'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
