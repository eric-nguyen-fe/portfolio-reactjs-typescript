import React from 'react';

import Input from 'components/atoms/Input';
import TextArea from 'components/atoms/TextArea';

interface ContactProps {
}

const Contact: React.FC<ContactProps> = ({ }) => (
  <div className="t-contact">
    <form>
      <Input
        variant="simple"
        id=""
        label="Email"
        required
        placeholder="Please, enter your email..."
        type="email"
      />
      <Input
        variant="simple"
        id=""
        label="Title"
        required
        placeholder=""
      />
      <TextArea
        id=""
        readOnly={false}
        label="content"
        placeholder="Enter your content"
      />
    </form>
  </div>
);

Contact.defaultProps = {
};

export default Contact;
