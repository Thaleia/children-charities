import familyFund from '../images/familyFund.png';
import contact from '../images/contact.png';
import kids from '../images/kids.png';
import saveTheChildren from '../images/saveTheChildren.png';

export const charities = [
    {
        id: 1,
        name: 'Family Fund',
        action: 'Family Fund provide grants for families raising a disabled or seriously ill child or young people on a low income across the UK',
        image: familyFund,
        website: 'https://www.familyfund.org.uk/'
    },
    {
        id: 2,
        name: 'Contact',
        action: 'We are Contact, the charity for families with disabled children. We support and bring families together and help them take action for others.',
        image: contact,
        website: 'https://contact.org.uk/'
    },
    {
        id: 3,
        name: 'Kids',
        action: 'An established national charity, KIDS leads the way in providing disabled children and their families with support to thrive, not just survive.',
        image: kids,
        website: 'https://www.kids.org.uk/'
    },
    {
        id: 4,
        name: 'Save the Children',
        action: 'Save the Children is a UK charity for children that works in over 100 countries to make sure children are fed, learning and treated fairly.',
        image: saveTheChildren,
        website: 'https://www.savethechildren.org.uk/'
    }
];
