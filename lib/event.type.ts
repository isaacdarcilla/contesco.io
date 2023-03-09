export interface EventState {
  eventName: string;
  eventSlug: string;
  organizerName: string;
  categoryName: string;
  eventStartDate: string;
  eventEndDate: string;
  eventDescription: string;
  setEventName: (by: string) => void;
  setOrganizerName: (by: string) => void;
  setCategoryName: (by: string) => void;
  setEventStartDate: (by: string) => void;
  setEventEndDate: (by: string) => void;
  setEventDescription: (by: string) => void;
}
