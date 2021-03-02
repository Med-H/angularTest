import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a message', () => {
    service.messages= ["first message"]

    service.add("second message")

    expect(service.messages).toHaveSize(2);
  });

  it('should clear the message', () => {
    service.messages= ["one message"]

    service.clear()

    expect(service.messages).toHaveSize(0);
  });
});
