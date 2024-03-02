

import University from '../model/university.model.js';
import UniversityNews from '../model/universityNews.model.js';

export const loginUniversity = async (req , res ) => {
  try {
    const { universityName, universityId, universityEmail } = req.body;
    const university = await University.findOne({ universityName, universityId, universityEmail });

    console.log(university);
    res.status(201).json(university);
    

  }catch (error) {
    console.log("something wrong happend at  loging university :: at backend " , error);
    res.status(400).send();
  }
 
}


export const createNews = async (req, res) => {
  try {
    const news = new UniversityNews(req.body);
    await news.save();
    res.status(201).json(news);
  } catch (error) {
    res.status(400).json({ message: "Something went wrong!", error: error.message });
  }
};

export const getAllNews = async (req, res) => {
    try {
      const news = await UniversityNews.find() ;
      res.status(200).json(news);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

export const getNewsById = async (req, res) => {
    try {
      const news = await UniversityNews.findById(req.params.id);
      console.log(req.params.id);
      console.log(req.params._id);
      if (news) {
        res.status(200).json(news);
      } else {
        res.status(404).json({ message: 'news not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

export const updateNews = async (req, res) => {
    try {
      const news = await UniversityNews.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (news) {
        res.status(200).json(news);
      } else {
        res.status(404).json({ message: 'news not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};


export const deleteNews = async (req, res) => {
    try {
      const news = await UniversityNews.findByIdAndDelete(req.params.id);
      if (news) {
        res.status(200).json({ message: 'news deleted successfully' });
      } else {
        res.status(404).json({ message: 'news not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};




