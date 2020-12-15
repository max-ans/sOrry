import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader/Loader';
import { ThumbsUp } from 'react-feather';

import './apology.scss';

const Apology = ({
  fetchApologyInformations,
  isFetched,
  apologyInformation,
}) => {
  const { slug } = useParams();

  useEffect(() => {
    fetchApologyInformations(slug);
  }, [slug]);

  return (
    <main className="apology">
      {!isFetched && <Loader />}
      {isFetched && (
        <>
          <section className="apology-view">
            <h3 className="apology-title">
              {apologyInformation.title}
            </h3>
            <p className="apology-content">
              {apologyInformation.content}
            </p>
            <div className="apology-informations">
              <p className="apology-date">
                {apologyInformation.author.nickname} le {apologyInformation.createdAt}
              </p>
              {apologyInformation.categories.map((categorie) => (
                <div className="apology-categorie">
                  {categorie.title}
                </div>
              ))}
              <div className="apology-fame">
                <ThumbsUp />
                {apologyInformation.likes}
              </div>
            </div>
            <div className="apology-commentary">
              {apologyInformation.comments.map((comment) => (
                <>
                  <div className="comment-item">
                    {comment.content}
                  </div>
                  <div className="comment-infos">
                    {comment.author.nickname}
                  </div>
                </>
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
};

Apology.propTypes = {
  fetchApologyInformations: PropTypes.func.isRequired,
  isFetched: PropTypes.bool.isRequired,
  apologyInformation: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    slug: PropTypes.string,
    content: PropTypes.string,
    likes: PropTypes.number,
    createdAt: PropTypes.string,
    categories: PropTypes.array,
    comments: PropTypes.array,
    author: PropTypes.shape({
      nickname: PropTypes.string,
    }),
  }),
};

Apology.defaultProps = {
  apologyInformation: {},
};

export default Apology;
