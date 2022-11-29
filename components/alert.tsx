import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

type Props = {
  preview?: boolean
  aboutus?: boolean
  shows?: boolean
}

const Alert = ({ preview, shows, aboutus }: Props) => {
  return (
    <div
      className={cn('border-b', {
        'bg-neutral-800 border-neutral-800 text-white': preview,
        'bg-neutral-50 border-neutral-200': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              <nav><ul className="top-1/2 right-0 lg:flex lg:mx-auto lg:flex lg:items-right align-right lg:w-auto lg:space-x-6">
			<li><a className="text-sm text-gray-400 hover:text-gray-500" href="/">Home</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a className={cn("text-sm ", {"text-gray-400 hover:text-gray-500": !aboutus,
                                        "text-blue-400 hover:text-blue-500": aboutus})}
              href="/chi-siamo">Chi siamo</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li> <a className={cn("text-sm ", {"text-gray-400 hover:text-gray-500": !shows, "text-blue-400 hover:text-blue-500": shows})}
              href="/spettacoli">Spettacoli</a>
      </li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			
		</ul>
    </nav>
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Alert
