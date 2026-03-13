package com.acromere.www.download;

import com.acromere.util.XmlDescriptor;
import com.acromere.www.download.MavenDownloadProvider;
import com.acromere.www.download.ProductDownload;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.Mockito.*;

public class MavenDownloadProviderTest {

	private MavenDownloadProvider provider;

	private static final String TEST_MAVEN_REPOSITORY = "source/test/repos/maven";

	private static final String group = "com.acromere";

	private static final String artifact = "xenon";

	private static final String classifier = "product";

	private static final String type = "card";

	private static final String name = "Xenon";

	private static final String uri = "https://repo.acromere.com/acm/" + group.replace( '.', '/' ) + "/" + artifact;

	@BeforeEach
	public void before() throws Exception {
		provider = mock( MavenDownloadProvider.class );

		// Needed because the methods are mocked
		//when( provider.getDownloads( anyString(), anyString(), anyString(), anyString(), anyString() ) ).thenCallRealMethod();
		when( provider.getDownloads( anyList(), anyString(), anyString(), anyString(), anyString() ) ).thenCallRealMethod();
		//when( provider.getDownloadKey( anyString(), anyString(), anyString(), anyString(), anyString() ) ).thenCallRealMethod();

		// Setup the repository descriptors
		stageDescriptor( uri, "/maven-metadata.xml" );
		stageDescriptor( uri, "/0.4-SNAPSHOT/maven-metadata.xml" );
		stageDescriptor( uri, "/0.4-SNAPSHOT/xenon-0.4-20170910.200106-43.pom" );
		stageDescriptor( uri, "/0.5-SNAPSHOT/maven-metadata.xml" );
		stageDescriptor( uri, "/0.5-SNAPSHOT/xenon-0.5-20171018.023208-23.pom" );
		stageDescriptor( uri, "/0.6-SNAPSHOT/maven-metadata.xml" );
		stageDescriptor( uri, "/0.6-SNAPSHOT/xenon-0.6-20180604.142938-243.pom" );
		stageDescriptor( uri, "/0.6/xenon-0.6.pom" );
		stageDescriptor( uri, "/0.7-SNAPSHOT/maven-metadata.xml" );
		stageDescriptor( uri, "/0.7-SNAPSHOT/xenon-0.7-20190124.141909-409.pom" );
		stageDescriptor( uri, "/0.7/xenon-0.7.pom" );
		stageDescriptor( uri, "/0.8-SNAPSHOT/maven-metadata.xml" );
		stageDescriptor( uri, "/0.8-SNAPSHOT/xenon-0.8-20190125.123121-4.pom" );
	}

	@AfterEach
	public void after() {
		//verify( factory, times(2) ).getXmlDescriptor( anyString() );
	}

	@Test
	public void testGetLatestDownload() throws Exception {
		String channel = "latest";
		String platform = "linux";

		// Execute the method
		List<ProductDownload> downloads = provider.getDownloads( List.of( artifact ), classifier, type, channel, platform );
		verify( provider, times( 3 ) ).getXmlDescriptor( anyString() );

		assertThat(downloads).size().isGreaterThan( 0 );
		assertThat( downloads.get( 0 ).getKey()). isEqualTo( channel + "-xenon-" + platform + "-product-card" ) ;
		//assertThat( downloads.get( 0 ).getChannel()). isEqualTo( "0.8-SNAPSHOT"  );
		assertThat( downloads.get( 0 ).getGroup()). isEqualTo( group  );
		assertThat( downloads.get( 0 ).getArtifact()). isEqualTo( artifact  );
		assertThat( downloads.get( 0 ).getCategory()). isEqualTo( classifier  );
		assertThat( downloads.get( 0 ).getType()). isEqualTo( type  );
		assertThat( downloads.get( 0 ).getPlatform()). isEqualTo( platform  );
		assertThat( downloads.get( 0 ).getName()). isEqualTo( name  );
		assertThat( downloads.size()). isEqualTo( 1  );
	}

	@Test
	public void testGetReleaseDownload() throws Exception {
		String channel = "release";
		String platform = "macos";

		// Execute the method
		List<ProductDownload> downloads = provider.getDownloads( List.of( artifact ), classifier, type, channel, platform );
		verify( provider, times( 2 ) ).getXmlDescriptor( anyString() );

		assertThat( downloads).size().isGreaterThan( 0 );
		assertThat( downloads.get( 0 ).getKey()). isEqualTo( channel + "-xenon-" + platform + "-product-card"  );
		//assertThat( downloads.get( 0 ).getChannel()). isEqualTo( "0.7"  );
		assertThat( downloads.get( 0 ).getGroup()). isEqualTo( group  );
		assertThat( downloads.get( 0 ).getArtifact()). isEqualTo( artifact  );
		assertThat( downloads.get( 0 ).getCategory()). isEqualTo( classifier  );
		assertThat( downloads.get( 0 ).getType()). isEqualTo( type  );
		assertThat( downloads.get( 0 ).getPlatform()). isEqualTo( platform  );
		assertThat( downloads.get( 0 ).getName()). isEqualTo( name  );
		assertThat( downloads.size()). isEqualTo( 1  );
	}

	private void stageDescriptor( String uri, String path ) throws IOException {
		Path resource = Paths.get( TEST_MAVEN_REPOSITORY, path );
		XmlDescriptor releasePom = new XmlDescriptor( resource.toUri() );
		when( provider.getXmlDescriptor( uri + path ) ).thenReturn( releasePom );
	}

}
