import User from "../model/user.model.js";

export const login = async (req, res) => {
    try {
      const { ABC_ACCOUNT_ID, ENROLLMENT_NO, UNIVERSITY_NAME } = req.body;
     
      const user = await User.findOne({ ABC_ACCOUNT_ID, ENROLLMENT_NO, UNIVERSITY_NAME });
      if (user) {
      
        res.status(200).json({ 
          message: 'Authentication successful',
         userId : user._id,
         gender : user.GENDER,
          dob:user.DOB,
          crd: user.CREATED_DATE,
          pgn: user.PROGRAM_NAME,
          pno: user.PHONE_NUMBER,
          con: user.COURSE_NAME,
          abc: user.ABC_ACCOUNT_ID,
          eno: user.ENROLLMENT_NO,
          university: user.UNIVERSITY_NAME,
         });
      } else {
        
        res.status(401).json({ message: 'Authentication failed' });
      }
    } catch (error) {
      console.error('Authentication error:', error);
      res.status(500).json({ message: 'Server error' });
    }
}

