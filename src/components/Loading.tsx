import '../styles/components/Loading.css'
import {MutatingDots} from 'react-loader-spinner'

export function Loading() {
    return <div className="loading">
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#E5E5E5"
          secondaryColor="#4fa94d"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />
    </div>;
}